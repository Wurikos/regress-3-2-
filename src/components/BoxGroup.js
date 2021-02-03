import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, List, Input, Icon, Image, Box, Button, Hr } from "@quarkly/widgets";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	}
};

const BoxGroup = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<List {...override("list")}>
			<Text {...override("text1")} />
		</List>
		<Input {...override("input")} />
		<Icon {...override("icon")} />
		<Image {...override("image")} />
		<Box {...override("box")} />
		<Button {...override("button")} />
		<Hr {...override("hr")} />
		{children}
	</Box>;
};

Object.assign(BoxGroup, { ...Box,
	defaultProps,
	overrides
});
export default BoxGroup;