# Common Parameters

Unique Device IDs (UDIDs) for Kaiterra devices are 128-bit random [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier). They're case-insensitive and may be submitted with or without intermediate dashes (`46048117-86a7-488e-9c58-708f3470ee11` and `4604811786a7488e9c58708f3470ee11` are both OK).

The API enforces access control on device data as follows:

- For devices managed under an organization, access is restricted to users within that organization, and the API keys they create. For example, consider a device owned by Organization A: if a user who belongs to another organization (or who does not belong to any organization) creates an API key and attempts to access data for that device, the API will return `HTTP 403 Forbidden`.

- Data for devices not added to an organization can be accessed by any API key. While UDIDs consist of 128 random bits and are therefore unguessable, API users should treat them as secrets that should not be published online (such as in a public Git repository).

All dates/times follow [RFC3339](http://tools.ietf.org/html/rfc3339) (a refinement of ISO8601), which looks like `2016-12-07T05:32:16Z`. Milliseconds are accepted but are ignored (truncated). All times must be in UTC; any that aren't will be rejected with `400 bad request`.

All sampling intervals, such as for hourly-averaged data, are labelled by the _ending_ time of the sample sample, not the starting time. This is consistent with the way all apps report hourly average data from official sensors, probably because it avoids the problem of users thinking that the data they're seeing is an hour older than it is. Note that this implies daily data for e.g. the 15th of March is labelled as `2016-03-16T00:00Z`, so clients may want to subtract a day when labelling such data.

There is no hour 24; a bucket extending from 11pm on Dec 31 to midnight is labelled as 01-01 00:00, length 1 hour.

Latitude and longitude are specified in requests as a comma-separated pair, like `40.677715,-73.868130` (latitude, longitude), and in responses as an array of length 2 (again, latitude, then longitude).

The `aqi` query string parameter, if present, causes APIs returning pollutant data to precalculate corresponding air quality index values according to the [air quality index](https://en.wikipedia.org/wiki/Air_quality_index) of the given country or region. Codes are the 2-character codes from [ISO3166](https://en.wikipedia.org/wiki/ISO_3166). Supported values are `us`, `in`, and `cn`.

## Request Headers

The following headers are technically optional but are a good idea:

- `Accept-Encoding`: `gzip` is supported; clients are encouraged to use it.
- `Content-Encoding`: if there is a request body, this header denotes its encoding. Always use UTF-8.
