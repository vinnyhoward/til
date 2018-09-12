# Media Queries

```Media Queries``` are composed of an optional ```media``` type and any number of ```media``` feature expressions. ```Media Queries``` can be combined in various ways by using logical operators. The end goal of ```Media Queries``` is to provide an optimal user experience over a wide range of devices and dimensions.

```Media types``` describe the general category of a device. Except when using the ```not``` or ```only``` logical operators, the ```media type``` is optional and the ```all``` type will be implied.

- ```All```: Suitable for all devices.

- ```Print```: Intended for paged material and documents viewed on a screen in print preview mode. (Please see paged media for information about formatting issues that are specific to these formats.)

- ```Screen```: Intended primarily for screens.

- ````Speech```: Intended for speech synthesizers.

Media features describe specific characteristics of the user agent, output device, or environment. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.