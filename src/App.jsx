
import User from './components/User'
import UserList from './components/UserList'
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';

function App() {

  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      balance: 600
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      balance: 200
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      balance: 6000
    }
  ]

  return (
    <>
      <UserList>
        <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} />
      </UserList>

      <Button variant="text" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>
      <Button variant="contained" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>
      <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>

    </>
  )
}

export default App
