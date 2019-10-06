import { usePosition } from "../common/usePosition";
import { getDistance } from "geolib";

export const FilterList = organizations => {
  const { latitude, longitude } = usePosition(true);

  const organizationsByDistance = organization => {
    const distance = getDistance(
      { latitude: parseFloat(34.084), longitude: parseFloat(-118.4) },
      {
        latitude: parseFloat(organization.latitude),
        longitude: parseFloat(organization.longitude)
      }
    );
    const miles = distance / 1609.344;
    organization.distance = miles.toFixed(2);
    return organization;
  };

  const organizedList = organizations
    .map(organizationsByDistance)
    .sort(function(a, b) {
      return a.distance - b.distance;
    });
  return organizedList;
};
