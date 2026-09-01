# Sensor Reading Data Format

Data on various pollutants or other parameters (like temperature and humidity) are returned first as an array of parameters, with a series of data points under each parameter:

```json
{
    "data": [
        {
            "param": "rpm25c",
            "units": "µg/m³",
            "source": "km100",
            "span": 60,
            "points": [
                {
                    "ts": "2020-06-17T03:40:00Z",
                    "value": 120
                }
            ]
        },
        {
            "param": "rtemp",
            "units": "%",
            "span": 60,
            "points": [
                {
                    "ts": "2020-06-17T03:40:00Z",
                    "value": 62
                }
            ]
        }
    ]
}
```

Each series under `data` has the following properties:

- `param`: The parameter code. These are listed below.
- `units`: The units under which the parameter is expressed. These are listed below.
- `source`: (Present for sensor modules) The module that captured the parameter reading. For instance, `km102` identifies the KM-102 sensor module.
- `span`: The sampling interval, in seconds, over which this measurement was taken. For example, 60 refers to a sample taken over the span of one minute, and 3600 designates hourly averages.
- `points`: The actual array of data points for this series. Even if the series has only one data point, this is still an array.

## Parameter Codes

| Code                   | Meaning                                                          | Default Units |
| ---------------------- | ---------------------------------------------------------------- | ------------- |
| `rco2`                 | Carbon dioxide                                                   | ppm           |
| `ro3`                  | Ozone                                                            | ppb           |
| `rpm1c`                | PM1                                                              | µg/m³         |
| `rpm25c`               | PM2.5                                                            | µg/m³         |
| `rpm10c`               | PM10                                                             | µg/m³         |
| `rhumid`               | Relative humidity                                                | %             |
| `rtemp`                | Temperature                                                      | C             |
| `tvoc`                 | Total Volatile Organic Compounds (TVOC)                          | ppb           |
| `pir`                  | Passive infrared (0: no movement detected; 1: movement detected) | x             |
| `atmospheric_pressure` | Ambient atmospheric pressure                                     | Pa            |
| `light_clear`          | Illuminance measured with no filter                              | lx            |
| `light_red`            | Illuminance measured through a red filter                        | lx            |
| `light_green`          | Illuminance measured through a green filter                      | lx            |
| `light_blue`           | Illuminance measured through a blue filter                       | lx            |
| `light_ir`             | Illuminance measured through an infrared filter                  | lx            |
| `cct`                  | Correlated Color Temperature                                     | K             |
| `co`                   | Carbon monoxide                                                  | ppm           |
| `no2`                  | Nitrogen dioxide (NO2)                                           | ppb           |

The following parameter codes are deprecated:

- `rtvoc`: Total Volatile Organic Compounds (TVOC), prior to alignment across devices and with global standards. Will be removed from the API in October 2027. Use `tvoc` instead.

## Unit Codes

| Code    | Meaning                                                     |
| ------- | ----------------------------------------------------------- |
| `ppm`   | Parts per million (volumetric concentration)                |
| `ppb`   | Parts per billion                                           |
| `µg/m³` | Micrograms per cubic meter (mass concentration)             |
| `mg/m³` | Milligrams per cubic meter                                  |
| `C`     | Degrees Celsius                                             |
| `F`     | Degrees Fahrenheit                                          |
| `x`     | Count of something, such as readings in a sampling interval |
| `%`     | Percentage, as with relative humidity                       |
| `lx`    | Lumens per square meter (illuminance)                       |
| `Pa`    | Pascals, or Newtons per square meter (pressure)             |
| `K`     | Kelvins                                                     |
