# CSS Box Model

The content area bounded bt the edge, which contains the real content of the element. Such as text, an image, or a video player. Its dimensions are the ```content width``` or (content-box width) and the ```content height``` or (content-box height) It often has a background color or background image.

If the ```box-sizing``` property is set to ```content-box``` which is the default, the content's area's size can be explicitly defined with ```width```, ```min-width```, ```max-width```, ```height```, and ```min-height``` properties.

The ```padding area``` bounded by the ```padding edge``` extends the content area to include the element's padding. Its dimensions are the ```padding-box width``` and the ```padding-box height```.

The thickness of the padding is determined by the ```padding-top```, ```padding-right```, ```padding-bottom```, ```padding-left``` and shorthand ```padding``` properties.

The border area, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the border-box width and the border-box height.

The thickness of the borders are determined by the ```border-width``` and shorthand ```border``` properties. If the ```box-sizing``` property is set to ```border-box```, 
the ```border``` area's size can be explicitly defined with the ```width```, ```min-width```, ```max-width```, ```height```, ```min-height```, and ```max-height``` properties. When there is a ```background``` (background-color or background-image) set on a box, it extends to the outer edge of the border (i.e. extends underneath the border in z-ordering). This default behavior can be altered with the background-clip css property.

The ```margin``` area, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. Its dimensions are the ```margin-box width``` and the ```margin-box height```.

The size of the ```margin``` area is determined by the ```margin-top```, ```margin-right```, ```margin-bottom```, ```margin-left```, and shorthand ```margin``` properties. When margin collapsing occurs, the margin area is not clearly defined since margins are shared between boxes.

- Content: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions ```content-box width``` and ```content-box height```.

- Padding: The transparent area surrounding the content. It has dimensions are ```padding-box width``` and ```padding-box height```.

- Border: The area surrounding the padding (if any) and content. It has dimensions ```border-box width``` and ```border-box height```.

- Margin: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions ```margin-box width``` and ```margin-box height```.


![alt text][logo]

[logo]: https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif "Box Model Image"