package com.example.employeemanagement.config;

import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
    basePackages = "com.example.employeemanagement.department.repository",
    entityManagerFactoryRef = "departmentEntityManagerFactory",
    transactionManagerRef = "departmentTransactionManager"
)
public class DepartmentDataSourceConfig {

    @Bean
    @ConfigurationProperties("department.datasource")
    public DataSourceProperties departmentDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties("department.datasource")
    public DataSource departmentDataSource() {
        return departmentDataSourceProperties()
                .initializeDataSourceBuilder()
                .build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean departmentEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(departmentDataSource())
                .packages("com.example.employeemanagement.department.entity")
                .persistenceUnit("departmentPU")
                .build();
    }

    @Bean
    public PlatformTransactionManager departmentTransactionManager(
            LocalContainerEntityManagerFactoryBean departmentEntityManagerFactory) {
        return new JpaTransactionManager(departmentEntityManagerFactory.getObject());
    }
}
