import Link from "next/link";

const TableRecomendations = () => {
  return (
    <section className="mb-2">
      <ul>
        <li className="text-xs">- Please enter at least two measurements.</li>
        <li className="text-xs">
          - All values are in millimeters, except for the &quot;number of
          holes&quot;.
        </li>
        <li className="text-xs">
          - We recommend taking a look at the link to ensure the sizes are
          correct.
        </li>
        <li className="text-xs">
          - If you notice any errors, please
          <Link href="/Contact">
            <span className="underline"> contact us.</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TableRecomendations;
