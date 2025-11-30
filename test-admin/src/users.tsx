import {
    List,
    DataTable,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";
export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      {/* <TextInput source="email" email /> */}
    </SimpleForm>
  </Create>
);