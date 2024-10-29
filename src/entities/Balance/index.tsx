import useGetUsersMe from '../../app/hooks/Users/useGetUsersMe';

const Balance = () => {
  const { data } = useGetUsersMe();
  console.log(data);
  

  return <p className="text-[20px]">{data && data?.balance + 'р'}</p>;
};

export default Balance;
