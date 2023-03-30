import React from 'react';
import { setSearch } from '../../store/searchSlice';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                dispatch(setSearch(false));
            }, 1000);
        }
    };
    return (
        <div>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => dispatch(setSearch(false))}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    )
}

export default SearchBar
