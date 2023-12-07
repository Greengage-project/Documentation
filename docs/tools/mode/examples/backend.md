# MODE Integration Guide for backend data analysis

We provide a basic REST entpoint as a Docker image which listens
on an endpoint `/analyze`. The input is binary movement data gathered
from the smartphone apps (see [here](ios.md) and [here](android.md)).

Output is a [JSON string](../integration.md#output) of the taken activities.


## Using the image
1. Copy exported image to server

2. Import image on server

```sh
docker load -i modesrv-1.0.0.tar.gz
```

3. Create Docker container
 
```sh
# docker stop modesrv
# docker rm modesrv
docker create --name modesrv -p 8080:8080 --restart=unless-stopped ait/modesrv:1.0.0
```

4. Run Docker image and follow its logs

```sh
docker start modesrv
docker logs -f modesrv
```

## Testing the image
Start the container and use the provided `test_container.sh` script from this
directory to send example data to `localhost:8080` and see some JSON output.

## Important Notes

The MODE backend service uses third-party routing services (e.g. Google Router).
At this stage, a sample API key is hardcoded in the project.
Make sure to keep that key confident and **only** use it for testing and sparsingly.
Overuse of the API key may result in high fees, as only about 20.000
requests/per month are free!

**For production, we must use a different key being used for billing.**
This will be set via an ENV variable to the Docker image.