import { Response } from "express";
import Person from "../../interfaces/person";

class GetRecommendationsByCpfService {
  private data: Person[];

  constructor(data: Person[]) {
    this.data = data;
  }

  private getPersonByCpf(cpf: string): Person | undefined {
    return this.data.find((person) => person.cpf === cpf);
  }

  getRecommendationsByCpf(cpf: string, res: Response): string[] {
    const person = this.getPersonByCpf(cpf);

    if (cpf.length !== 11) {
      res.status(400).json({
        error:
          "CPF Inválido. O CPF informado não possui 11 dígitos, digite um CPF válido",
      });
    }

    if (!person) {
      res
        .status(400)
        .json({
          error: "Não existe em nossos dados cadastro para o CPF informado.",
        });
      return [];
    }

    const friendRelationships = person.relationship;
    const friendsOfFriends: { [cpf: string]: number } = {};

    for (const friendCpf of friendRelationships) {
      const friend = this.getPersonByCpf(friendCpf);

      if (friend) {
        for (const friendOfFriendCpf of friend.relationship) {
          if (
            friendOfFriendCpf !== cpf &&
            !friendRelationships.includes(friendOfFriendCpf)
          ) {
            friendsOfFriends[friendOfFriendCpf] =
              (friendsOfFriends[friendOfFriendCpf] || 0) + 1;
          }
        }
      }
    }

    const sortedFriendsOfFriends = Object.entries(friendsOfFriends).sort(
      (a, b) => b[1] - a[1]
    );
    const result = sortedFriendsOfFriends
      .filter(([, score]) => score > 0)
      .map(([cpf]) => cpf);
    return result;
  }
}

export default GetRecommendationsByCpfService;
