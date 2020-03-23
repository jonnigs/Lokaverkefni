package is.hi.HBV442L.climbing3d.climbing3d.Repositories;

import is.hi.HBV442L.climbing3d.climbing3d.Entities.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RouteRepository extends JpaRepository<Route, Long> {
    Route save(Route route);
    void delete(Route route);
    List<Route> findAll();
}
