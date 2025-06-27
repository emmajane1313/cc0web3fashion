"use client";

import Wrapper from "../../Common/modules/Wrapper";
import useCodigo from "../hooks/useCodigo";


export default function Entry() {
  const { reps } = useCodigo();

  return (
    <Wrapper
      children={
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white" dir="rtl">
            اللي بيتبني في الويب ٣ على ستايل فاشن
          </h1>
          <div className="relative text-sm" dir="rtl">
            خد الكود بتاعنا، عدّل عليه، ابرمج أكتر، وخلّيها على مزاجك.
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {reps.map((repo) => (
              <div
                key={repo.id}
                className="border border-zinc-700 p-4 rounded bg-zinc-900"
              >
                <h2 className="text-lg font-semibold text-white">
                  {repo.name}
                </h2>
                <p className="text-zinc-400 text-sm mb-2">
                  {repo.description || "Sin descripción"}
                </p>
                <div className="text-sm text-zinc-300 mb-2">
                  🌐 {repo.language || "?"} | ⭐ {repo.stargazers_count} | 🕒{" "}
                  {new Date(repo.updated_at).toLocaleDateString()}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-lime-400 text-sm underline"
                >
                  Ver en GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
