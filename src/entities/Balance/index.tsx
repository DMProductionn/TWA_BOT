import useGetUsersMe from '../../app/hooks/Users/useGetUsersMe';

const Balance = () => {
  const { data } = useGetUsersMe();
  console.log(data?.balance);
  

  return <p className="text-[20px]">{data ? data?.balance + 'р' : '0р'}</p>;
};

export default Balance;
