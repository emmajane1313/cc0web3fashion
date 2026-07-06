import { ModalContext } from "@/app/providers";
import Image from "next/image";
import { FunctionComponent, JSX, useContext } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import useCrearCuenta from "../hooks/useCrearCuenta";

const CrearCuenta: FunctionComponent = (): JSX.Element => {
  const contexto = useContext(ModalContext);
  const { account, accountLoading, setAccount, handleCreateAccount } =
    useCrearCuenta();
  return (
    <div
      className="inset-0 text-xs justify-center fixed z-20 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        contexto?.setCrearCuenta(false);
      }}
    >
      <div
        className="relative w-[90vw] sm:w-[70vw] half:w-[60vw] min-w-fit md:w-[40vw] lg:w-[40vw] h-fit col-start-1 place-self-center bg-black border border-red-600 font-mont rounded-md text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-fit flex flex-col gap-3 items-center justify-center p-3">
          <div className="relative w-fit pb-3 h-fit flex items-center justify-center">
            Create Lens Account
          </div>
          <div className="relative w-full h-fit flex flex-col gap-3 items-center justify-center">
            <div className="relative items-center justify-center flex w-fit h-fit">
              <label
                className="relative border border-red-600 bg-black w-20 rounded-full h-20 flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {account?.pfp && (
                  <Image
                    alt="pfp"
                    src={URL.createObjectURL(account.pfp)}
                    objectFit="cover"
                    layout="fill"
                    draggable={false}
                    className="rounded-full"
                  />
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  hidden
                  required
                  id="files"
                  multiple={false}
                  name="pfp"
                  disabled={accountLoading}
                  onChange={(e) => {
                    e.stopPropagation();
                    if (!e.target.files || e.target.files.length === 0) return;
                    setAccount({
                      ...account,
                      pfp: e?.target?.files?.[0],
                    });
                  }}
                />
              </label>
            </div>
            <div className="relative w-full h-fit flex items-start justify-between flex-row gap-3">
              <div className="relative w-full h-fit flex flex-col gap-1.5 items-start justify-start">
                <div className="relative w-fit h-fit flex">Username</div>
                <input
                  disabled={accountLoading}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      username: e.target.value,
                    })
                  }
                  className="relative border border-red-600 bg-black w-full h-8 focus:outline-none p-1"
                  value={account?.username}
                />
              </div>
              <div className="relative w-full h-fit flex flex-col gap-1.5 items-start justify-start">
                <div className="relative w-fit h-fit flex">Local Name</div>
                <input
                  disabled={accountLoading}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      localname: e.target.value,
                    })
                  }
                  className="relative w-full border border-red-600 bg-black h-8 focus:outline-none p-1"
                  value={account?.localname}
                />
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col gap-1.5 items-start justify-start">
              <div className="relative w-fit h-fit flex">Bio</div>
              <textarea
                disabled={accountLoading}
                onChange={(e) =>
                  setAccount({
                    ...account,
                    bio: e.target.value,
                  })
                }
                className="relative w-full h-14 overflow-y-scroll focus:outline-none p-1 border border-red-600 bg-black"
                value={account?.bio}
                style={{
                  resize: "none",
                }}
              ></textarea>
            </div>
          </div>
          <div className="relative w-fit h-fit flex">
            <div
              className={`relative px-3 py-1 flex items-center justify-center rounded-md bg-black border border-red-600 w-28 h-8 ${
                !accountLoading &&
                "cursor-pointer active:scale-95 hover:opacity-70"
              }`}
              onClick={() => !accountLoading && handleCreateAccount()}
            >
              {accountLoading ? (
                <AiOutlineLoading
                  className="animate-spin"
                  color="white"
                  size={15}
                />
              ) : (
                "Create"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
