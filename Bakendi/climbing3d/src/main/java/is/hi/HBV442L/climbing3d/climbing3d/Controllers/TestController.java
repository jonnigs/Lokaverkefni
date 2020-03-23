package is.hi.HBV442L.climbing3d.climbing3d.Controllers;

import is.hi.HBV442L.climbing3d.climbing3d.Entities.Route;
import is.hi.HBV442L.climbing3d.climbing3d.Services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
public class TestController {

    private RouteService routeService;

    @Autowired
    public TestController(RouteService routeService) {
        this.routeService = routeService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String Test(Model model) {
        return "test";
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String addRoute(@Valid Route route, BindingResult result, Model model) {
        routeService.save(route);
        model.addAttribute("routes", routeService.findAll());
        return "test";
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(Model model) {
        model.addAttribute("routes", routeService.findAll());
        return "test2";
    }
}
