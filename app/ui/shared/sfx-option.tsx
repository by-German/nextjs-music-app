'use client'

import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Listbox,
  ListboxItem,
  Selection,
} from "@nextui-org/react";

const sfxOptions = [
  "Rain", "Thunder", "Wind", "Fire",
];

export function SfxOption() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["text"]));

  const handleSelection = (keys: Selection) => {
    setSelectedKeys(new Set(keys) as Set<string>);  
  }

  return (
    <>
      <Button
        variant="flat"
        onPress={() => onOpen()}
      >
        SFX
      </Button>

      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Select Sound Effect</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <Listbox
                    aria-label="Multiple selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={(keys: Selection) => handleSelection(keys)}
                  >
                    {sfxOptions.map((option) => (
                      <ListboxItem key={option}>{option}</ListboxItem>
                    ))}
                  </Listbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="bordered" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}