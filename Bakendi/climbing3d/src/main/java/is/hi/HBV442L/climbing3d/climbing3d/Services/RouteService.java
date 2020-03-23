package is.hi.HBV442L.climbing3d.climbing3d.Services;

import is.hi.HBV442L.climbing3d.climbing3d.Entities.Route;

import java.util.List;

public interface RouteService {
    Route save(Route route);
    void delete(Route route);
    List<Route> findAll();
}
