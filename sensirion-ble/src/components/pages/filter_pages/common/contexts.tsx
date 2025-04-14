import {Context, createContext} from "react";
import {SearchCriterias} from "../../../../types/search-criterias.d.tsx";

export interface FilterContextType {
    filters: SearchCriterias;
    setFilters: (_filters: SearchCriterias) => void;
}

const defaultFilterContextType: FilterContextType = {
    filters: {
        selectedGadget: undefined,
        selectedSignals: [],
        selectedSensors: [],
    },
    setFilters: () => {
        return;
    }
}

export const FilterContext: Context<FilterContextType> = createContext<FilterContextType>(defaultFilterContextType);
