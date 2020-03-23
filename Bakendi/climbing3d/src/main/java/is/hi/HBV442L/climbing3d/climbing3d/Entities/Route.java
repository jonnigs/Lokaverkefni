package is.hi.HBV442L.climbing3d.climbing3d.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nafn;

    public Route() {
    }

    public Route(String nafn) {
        this.nafn = nafn;
    }

    public long getId() { return id; }

    public void setId(long id) {this.id = id; }

    public String getNafn() { return nafn;}

    public void setNafn(String nafn) { this.nafn = nafn; }
}
