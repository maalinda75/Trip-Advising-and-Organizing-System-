package com.trip.taosnew.service;





import com.trip.taosnew.exception.UserExistsException;
import com.trip.taosnew.exception.UserNotFoundException;
import com.trip.taosnew.model.User;
import com.trip.taosnew.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(String email, String password) {
        Optional<User> userOptional = userRepository.findUserByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (!user.getPassword().equals(password)) {
                throw new UserNotFoundException("Password is not correct for email: " + email);
            }
            return user;
        } else {
            throw new UserNotFoundException("User with email " + email + " not found.");
        }
    }

    public void addNewUser(User user) {
        Optional<User> existingUser = userRepository.findUserByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new UserExistsException("Email already exists: " + user.getEmail());
        }
        userRepository.save(user);
    }

    public void deleteUserByEmail(String email) {
        Optional<User> userOptional = userRepository.findUserByEmail(email);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException("User with email " + email + " not found.");
        }
        userRepository.deleteById(userOptional.get().getId());
    }
}
