import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <>
      <h1>
        <Skeleton /> Loading . . . .
      </h1>
    </>
  );
}
