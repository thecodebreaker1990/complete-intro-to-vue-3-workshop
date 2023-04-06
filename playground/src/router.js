import PokedexPage from "./views/PokedexPage.vue";
import UsersPage from "./views/UsersPage.vue";

const routes = [
  {
    path: "/",
    component: UsersPage,
  },
  {
    path: "/pokedex",
    component: PokedexPage,
  },
  {
    path: "/pokedex/:id",
    component: () => import("@/views/PokemonPage.vue"),
  },
];

export default routes;
