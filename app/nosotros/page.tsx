"use client";
import React, { useEffect, useState } from "react";
import { users } from "@/API/test";

type Usuarios = {
  id: number;
  firstName: string;
  lastName: string;
};
const Nosotros = () => {
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const ApiCall = async () => {
      try {
        setLoading(true);
        const usuarios = await users();
        setUsuarios(usuarios);
        console.log(usuarios);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    ApiCall();
  }, []);

  if (loading) {
    return <div className="h-full pt-[12vh]">Cargando usuarios..</div>;
  }

  if (usuarios.length === 0) {
    return <div className="h-full pt-[12vh]">sin users</div>;
  }

  return (
    <div className="h-full pt-[12vh] w-[80%] mx-auto">
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            {user.firstName}
            {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
