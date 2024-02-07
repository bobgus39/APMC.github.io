import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { PetIcon } from "../Icons/PetIcon";
import { animals } from "../data/animalData";

export default function FavoriteAnimal() {
  return (
    <Autocomplete
      label="Favorite Animal"
      placeholder="Search an animal"
      variant="bordered"
      defaultItems={animals}
      startContent={<PetIcon className="text-xl" />}
      defaultSelectedKey="cat"
      className="max-w-xs"
    >
      {(item) => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
}
