import { useQuery } from "react-query";
import { NavLink, Outlet } from "react-router-dom";
import "./Components/Navigate/NavStyles.css";
import { useState } from "react";

function App() {
  const [navStyles, setNavStyles] = useState("");
  const activeCategory = ({ isActive }) => {
    return {
      background: isActive && "black",
      borderColor: isActive && "black",
      color: isActive && "white",
    };
  };

  const activeNav = ({ isActive }) => {
    return setNavStyles("activeNav");
  };
  async function api() {
    const response = await fetch("https://fakestoreapi.com/products");
    const resultado = await response.json();
    return resultado;
  }
  const { data, isLoading, isSuccess, isError, error } = useQuery("todos", api);

  return (
    <>
      <main className="grid grid-cols-1 p-4 font-outfit gap-5">
        <section className="">
          <h2 className="text-xl font-bold">Welcome</h2>
          <h2 className="text-xl font-bold opacity-30">Our fashions app</h2>
        </section>
        <section className="relative">
          <span className="absolute inset-y-0 flex items-center pl-5 w-20">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="stroke-2"
            >
              <path
                d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
                stroke="#000000"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            className="bg-[#EFEFEF] rounded-full py-4 pl-14 pr-3 w-full"
            placeholder="Search..."
          />
        </section>
        <section className="w-full font-bold">
          <h2 className="text-xl">Categories</h2>
          <ul className="flex justify-between mt-5">
            <li>
              <NavLink
                to="/dresses"
                className="rounded-full border-2 px-3 py-1"
                style={activeCategory}
              >
                Dresses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jackets"
                className="rounded-full border-2 px-3 py-1"
                style={activeCategory}
              >
                Jackets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jeans"
                className="rounded-full border-2 px-3 py-1"
                style={activeCategory}
              >
                Jeans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shoese"
                className="rounded-full border-2 px-3 py-1"
                style={activeCategory}
              >
                Shoese
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="grid grid-cols-2 gap-6">
          <Outlet />
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error: {error.message}</span>}
          {isSuccess &&
            data.map((p) => {
              return (
                <article key={p.id}>
                  <div className="flex justify-center mb-4 shadow-md">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-40 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className="text-sm overflow-hidden text-ellipsis  line-clamp-2"
                      title={p.title}
                    >
                      {p.title}
                    </h3>

                    <h3 className="font-bold">${p.price}</h3>
                  </div>
                </article>
              );
            })}
        </section>
      </main>
      <nav className="fixed grid place-content-center bottom-0 bg-white w-full h-14 rounded-t-[2rem] py-10 shadow-md-up ">
        <ul className="flex items-center w-screen justify-around font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center rounded-full py-1.5 bg-[#EFEFEF] relative  text-black pl-5 pr-2  duration-300 ease-out after:content-['Home']"
                  : "p-0"
              }
            >
              {({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className={
                    isActive
                      ? "fill-white w-9 h-9 p-2 absolute rounded-full bg-black duration-300 ease-out -translate-x-11"
                      : "w-6 h-6 bg-white"
                  }
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center rounded-full py-1.5 bg-[#EFEFEF] relative  text-black pl-5 pr-2  duration-300 ease-out after:content-['Cart']"
                  : "p-0"
              }
            >
              {({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className={
                    isActive
                      ? "fill-white w-9 h-9 p-2 absolute rounded-full bg-black duration-300 ease-out -translate-x-9"
                      : "w-6 h-6 bg-white"
                  }
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alerta"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center rounded-full py-1.5 bg-[#EFEFEF] relative  text-black pl-5 pr-2  duration-300 ease-out after:content-['Alert']"
                  : "p-0"
              }
            >
              {({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className={
                    isActive
                      ? "fill-white w-9 h-9 p-2 absolute rounded-full bg-black duration-300 ease-out -translate-x-10"
                      : "w-6 h-6 bg-white"
                  }
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center rounded-full py-1.5 bg-[#EFEFEF] relative  text-black pl-5 pr-2  duration-300 ease-out after:content-['Perfil']"
                  : "p-0"
              }
            >
              {({ isActive }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className={
                    isActive
                      ? "fill-white w-9 h-9 p-2 absolute rounded-full bg-black duration-300 ease-out -translate-x-10"
                      : "w-6 h-6 bg-white"
                  }
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
