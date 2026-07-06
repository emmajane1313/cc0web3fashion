import { useEffect, useState } from "react";
import { Repo } from "../types/codigo.types";

const useCodigo = () => {
  const [reps, setReps] = useState<Repo[]>([]);
  const getRepos = async () => {
    const res = await fetch(`https://api.github.com/users/digitalax/repos`);

    setReps(await res.json());
  };

  useEffect(() => {
    if (reps.length < 1) {
      getRepos();
    }
  }, []);

  return {
    reps,
  };
};

export default useCodigo;
