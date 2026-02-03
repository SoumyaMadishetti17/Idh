const Pagination = ({ total, page, setPage }) => {
    const pages = Math.ceil(total / 10);
  
    return (
      <div className="pagination">
        {[...Array(pages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  