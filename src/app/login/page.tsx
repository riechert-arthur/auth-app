import LoginForm from '../../components/LoginForm'
import Card from '../../components/Card'

export default function page() {
  return (
    <div className='w-full h-3/4 flex items-center justify-center'>
      <Card>
        <div className='w-full'>
          <h1 className='text-2xl font-bold'>Welcome,</h1>
        </div>
        <div className='flex items-center py-12'>
          <LoginForm />
        </div>
        <div className='w-full flex justify-center'>
          <text className='text-xs'>Not a member? <a className='text-blue-500' href='/signup'>Sign up here.</a></text>
        </div>
      </Card>
    </div>
  );
}
