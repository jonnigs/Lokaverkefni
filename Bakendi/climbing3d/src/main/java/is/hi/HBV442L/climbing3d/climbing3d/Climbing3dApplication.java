package is.hi.HBV442L.climbing3d.climbing3d;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@EnableJpaRepositories
public class Climbing3dApplication {

	public static void main(String[] args) {
		SpringApplication.run(Climbing3dApplication.class, args);
	}

}
