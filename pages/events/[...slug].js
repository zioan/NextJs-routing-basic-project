import { useRouter } from 'next/router';

function FilteredEventsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h2>Filtered Events</h2>
    </>
  );
}

export default FilteredEventsPage;
