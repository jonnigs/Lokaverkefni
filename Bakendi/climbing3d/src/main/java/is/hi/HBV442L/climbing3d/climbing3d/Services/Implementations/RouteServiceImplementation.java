package is.hi.HBV442L.climbing3d.climbing3d.Services.Implementations;

import is.hi.HBV442L.climbing3d.climbing3d.Entities.Route;
import is.hi.HBV442L.climbing3d.climbing3d.Repositories.RouteRepository;
import is.hi.HBV442L.climbing3d.climbing3d.Services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteServiceImplementation implements RouteService{

    RouteRepository repository;

    @Autowired
    public RouteServiceImplementation(RouteRepository routeRepository){
        this.repository = routeRepository;
    }

    @Override
    public Route save(Route route) { return repository.save(route); }

    @Override
    public void delete(Route route) { repository.delete(route); }

    @Override
    public List<Route> findAll() { return repository.findAll(); }
}
