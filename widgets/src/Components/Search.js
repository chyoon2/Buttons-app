import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      searchWiki();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          searchWiki();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  // you cannot use axios async/await on the first arg in a useEffect fxn. so helper fxn are the work around.
  // (async () => {
  //      await axios.get(term);
  //   })();
  // this is the same as the helper fxn about the extra parens is essentially calls the fxn itself, so you dont have to define it and then call it.

  const renderedResults = results.map((results) => {
    return (
      <div key={results.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${results.pageid}`}>
            GO
          </a>
        </div>
        <div className='content'>
          <div className='header'>{results.title}</div>
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
