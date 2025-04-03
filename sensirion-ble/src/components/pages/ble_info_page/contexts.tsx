import {Context, createContext} from "react";
import {SearchCriterias} from "../../../types/search-criterias.d.tsx";

export interface FilterContextType {
    filters: SearchCriterias;
    setFilters: (filters: SearchCriterias) => void;
}

const defaultFilterContextType: FilterContextType = {
    filters: {
        selectedGadget: undefined,
        selectedSignals: [],
        selectedSensor: [],
    },
    setFilters: () => {
        return;
    }
}

export const FilterContext: Context<FilterContextType> = createContext<FilterContextType>(defaultFilterContextType);
