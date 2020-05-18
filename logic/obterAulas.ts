import { Client } from "https://deno.land/x/mysql/mod.ts";
import Aula from "../model/aula.ts";

export default async (): Promise<Aula[]> => {
    const client = await new Client().connect({
        hostname: "127.0.0.1",
        username: "deno",
        password: "deno",
        db: "deno",
    });

    const registros = await client.query("select id, name from lessons");
    const aulas: Aula[] = registros.map((reg: any): Aula => {
        return {
            id: reg.id,
            nome: reg.name,
        };
    });

    return aulas;
}