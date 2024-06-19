import _ from "lodash";

function Pagination({ event, currentPage, pageSize, itemCount }) {
  const pageCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((val) => (
            <li
              key={val}
              className={"page-item " + (currentPage === val ? "active" : "")}
              onClick={() => event(val)}
            >
              <a className="page-link" href="#">
                {val}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
