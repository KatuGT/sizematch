import React from "react";

const TableRecomendations = () => {
  return (
    <section className="mb-2">
      <ul>
        <li className='text-xs'>- Please enter at least two measurements.</li>
        <li className='text-xs'>- All values are in millimeters.</li>
        <li className='text-xs'>
          - We recommend taking a look at the link to ensure the sizes are
          correct.
        </li>
        <li className='text-xs'>- If you notice any errors, please contact us.</li>
      </ul>
    </section>
  );
};

export default TableRecomendations;
