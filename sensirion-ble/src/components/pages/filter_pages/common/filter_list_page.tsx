import NavigationBar from "../../../common/navbar.tsx";
import {FilterContext} from "./contexts.tsx";
import {SearchCriterias} from "../../../../types/search-criterias.d.tsx";
import {ReactNode, useState} from "react";
import FooterBar from "../../../common/footer.tsx";
import FilterArea, {FilterTypes} from "./filters.tsx";
import "./filter_list_page.css";

const initialSearchCriterias: SearchCriterias = {
    selectedGadget: undefined,
    selectedSensor: [],
    selectedSignals: []
}

interface FilterListPageProps {
    displayedFilters: FilterTypes;
    children: ReactNode;
}

function FilterListPage({displayedFilters, children}: FilterListPageProps) {
    const [filters, setFilters] = useState<SearchCriterias>(initialSearchCriterias);
    return (
        <>
            <NavigationBar />
            <div id="body" className="filter_list__container">
                <FilterContext.Provider value={{filters: filters, setFilters: setFilters}}>
                    <FilterArea filters={displayedFilters} />
                    {children}
                </FilterContext.Provider>
            </div>
            <FooterBar />
        </>
    );
}

export default FilterListPage;
