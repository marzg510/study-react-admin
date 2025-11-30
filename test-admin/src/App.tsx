import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, Create } from 'react-admin';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserCreate } from "./users";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}
    create={UserCreate} />
  </Admin>
);
