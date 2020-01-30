import React from "react";
import { Box } from "@chakra-ui/core";
import ComponentPreview from "../ComponentPreview";
import { useBuilderContext } from "../../../contexts/BuilderContext";
import { useDropComponent } from "../../../hooks/useDropComponent";
import { useInteractive } from "../../../hooks/useInteractive";

const BoxPreview: React.FC<{ component: IComponent }> = ({ component }) => {
  const { drop, isOver } = useDropComponent(component.name);
  const { components } = useBuilderContext();
  const { props, ref } = useInteractive(component);

  if (isOver) {
    props.bg = "teal.50";
  }

  return (
    <Box pos="relative" ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview component={components[key]} />
      ))}
    </Box>
  );
};

export default BoxPreview;