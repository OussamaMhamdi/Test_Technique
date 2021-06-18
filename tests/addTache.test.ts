import { request } from "graphql-request";
import { host } from "./constants";
import { Tache } from '../models/tache';

const name = "tache";
const description = "jajaj";
const addTacheMutation = `
mutation{
    addTache(tacheInput:{name:"${name}", description: "${description}"}){
        name
    }
    }
`;

test("add Tache", async () => {
    const response = await request(host, addTacheMutation);
    expect(response).toEqual(Tache);
  });