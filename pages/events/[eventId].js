import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h2>Event Detail</h2>
    </>
  );
}

export default EventDetailPage;
