import SignUpForm from '../../components/SignUpForm'
import Card from '../../components/Card'

export default function page() {
  return (
    <div className='w-full h-3/4 flex items-center justify-center'>
      <Card>
        <div className='w-full'>
          <h1 className='text-2xl font-bold'>Welcome,</h1>
        </div>
        <div className='flex items-center py-12'>
          <SignUpForm />
        </div>
        <div className='w-full flex justify-center'>
          <text className='text-xs'>Already a member? <a className='text-blue-500' href='/login'>Log in here.</a></text>
        </div>
      </Card>
    </div>
  );
}
