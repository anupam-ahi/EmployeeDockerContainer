# EmployeeDockerContainer

Employee Management System | Full Stack Developer
Tech Stack: Java Spring Boot, JDBC Template, PostgreSQL, MySQL, React.js (Vite), Docker, Docker Compose

Engineered a full-stack application to display employee details by integrating two heterogeneous data sources (PostgreSQL for name/manager and MySQL for salary/expenditure) using a shared primary key and JdbcTemplate for precise SQL control.

Implemented transaction management with Spring’s @Transactional to ensure data consistency across both databases, bypassing standard JPA repositories for more flexible and optimized data operations.

Containerized the frontend and backend with individual Dockerfiles and orchestrated deployment using Docker Compose, demonstrating end-to-end DevOps proficiency and environment portability.