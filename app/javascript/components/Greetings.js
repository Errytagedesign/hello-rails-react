import React from 'react';

function Greetings() {
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>{greeting}</h1>
      {/* Add more content as needed */}
    </div>
  );
}

export default Greetings;
