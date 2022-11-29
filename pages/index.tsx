import { useState } from "react";

export default function Home() {
  const [pasokas, setPasokas] = useState(0);
  const [testUpgrade, setTestUpgrade] = useState(false);
  const [progressValues, setProgressValue] = useState(80)

  function handleAddPasoka() {
    setTimeout(() => {
      setPasokas(pasokas + 1);
    }, 350);
  }

  function buyOther() {
    alert("Dinheiro Insuficiente");
  }

  function buyTestUpgrade() {
    if (pasokas >= 10) {
      setPasokas(pasokas - 10);
      setTestUpgrade(true);
    } else {
      alert("Dinheiro Insuficiente");
    }
  }

  return (
    <div className="flex flex-col items-center pt-8 gap-6">
      <h1 className="font-bold text-4xl text-white">Pasoka Simulator</h1>
      <span></span>
      <div className="flex flex-col items-center gap-6">
        <button onClick={handleAddPasoka}>
          <img width={220} src="/pasoka.png" alt="" />
        </button>

        <h1 className="font-bold text-2xl text-white">
          Total de pasokas: <span className="text-green-500">R$ {pasokas}</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl text-white">--Upgrades--</h1>
        <div className="flex flex-col items-center gap-4 pt-6">
          <button
            onClick={buyTestUpgrade}
            disabled={testUpgrade}
            className="disabled:bg-white/50 bg-white p-2 border-b-green-500 border-b-4 rounded w-full font-bold text-xl"
          >
            {testUpgrade ? (
              <span>Comprado</span>
            ) : (
              <span>
                Botão teste - <span className="text-green-500">R$10</span>
              </span>
            )}
          </button>
          <button
            onClick={buyOther}
            className="disabled:bg-white/50 bg-white p-2 border-b-green-500 border-b-4 rounded w-full font-bold text-xl"
          >
            Melhorar click 1 - <span className="text-green-500">R$6.000</span>
          </button>
          <button
            onClick={buyOther}
            className="disabled:bg-white/50 bg-white p-2 border-b-green-500 border-b-4 rounded w-full font-bold text-xl"
          >
            Melhorar click 2 - <span className="text-green-500">R$12.000</span>
          </button>
          <button
            onClick={buyOther}
            className="disabled:bg-white/50 bg-white p-2 border-b-green-500 border-b-4 text-red-500 rounded w-full font-bold text-xl"
          >
            SUPER SECRETO! - <span className="text-green-500">R$999.999</span>
          </button>
        </div>
      </div>
    </div>
  );
}
