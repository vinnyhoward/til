# Object.getOwnPropertyDescriptors

This method returns all of the property descriptors of a given object. An object’s own property descriptor is directly on the object, not from it’s prototype. The name of the method is pretty descriptive, but in case you aren’t sure of what the possible descriptors are, they are listed below.

value — The value associated with the property (data descriptors only).

writable — true if and only if the value associated with the property may be changed (data descriptors only).

get — A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

set — A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

configurable — true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

enumerable — true if and only if this property shows up during enumeration of the properties on the corresponding object.