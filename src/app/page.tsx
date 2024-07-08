import { redirect } from 'next/navigation'
import { getSession } from './api/utils';
import NavBar from '../components/NavBar'
import Card from '@/components/Card';
import UpdateProfileForm from '@/components/UpdateProfileForm'

export default async function Home()  {

  const session = await getSession()
  if(!session) redirect('/login')

  return (
    <Card>
      <NavBar session={ session } />
      <UpdateProfileForm session={ session }/>
    </Card>
  );
}
