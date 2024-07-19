package com.trip.taosnew.service;

import com.trip.taosnew.exception.ClientAlreadyExistsException;
import com.trip.taosnew.exception.ClientNotFoundException;
import com.trip.taosnew.model.Client;
import com.trip.taosnew.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ClientService implements IClientService{

    private  final ClientRepository clientRepository;

    @Override
    public List<Client> getClient() {
        return clientRepository.findAll();
    }

    @Override
    public Client addClient(Client client) {
        if(clientAlreadyExists(client.getEmail())){
            throw new ClientAlreadyExistsException(client.getEmail() +"already exists!");
        }
        return clientRepository.save(client);
    }



    @Override
    public Client updateClient(Client client, Long id) {
        return clientRepository.findById(id).map(st->{
            st.setFirstName(client.getFirstName());
            st.setLastName(client.getLastName());
            st.setEmail(client.getEmail());
            st.setMobile(client.getMobile());
            st.setAge(client.getAge());
            st.setMembershipStatus(client.getMembershipStatus());
            return  clientRepository.save(st);
        }).orElseThrow(()->new ClientNotFoundException("Sorry,this client could not be found"));
    }

    @Override
    public Client getClientById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(()->new ClientNotFoundException("Sorry, no client found with the Id :" +id));
    }

    @Override
    public void deleteClient(Long id) {
        if (!clientRepository.existsById(id)){
            throw new ClientNotFoundException("Sorry, client not found");
        }
        clientRepository.deleteById(id);
    }

    private boolean clientAlreadyExists(String email) {
        return  clientRepository.findByEmail(email).isPresent();
    }

}
