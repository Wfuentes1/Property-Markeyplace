package com.Revature.ProjectTwo.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(
        name = "users",
        uniqueConstraints = @UniqueConstraint(
                name = "userId_Unique",
                columnNames = "email"
        )
)
public class User {

        @Id
        @SequenceGenerator(
                name = "user_sequence",
                sequenceName = "user_sequence",
                allocationSize = 1
        )
        @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "user_sequence"
        )
        private int id;
        @Column(
                name = "name",
                nullable = false
        )
        private String name;
        @Column(
                name = "password",
                nullable = false
        )
        private String password;
        @Column(
                name = "email",
                nullable = false
        )
        private String email;
        @Column(
                name = "status",
                nullable = false
        )
        private String status;
        private int rating;

}
